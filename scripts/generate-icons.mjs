import fs from 'node:fs/promises';
import path from 'node:path';
import fg from 'fast-glob';
import prettier from 'prettier';
import { transform } from '@svgr/core';

// НАСТРОЙКИ
const RAW_DIR = path.resolve('public/icons/generate');
const OUT_DIR = path.resolve('src/components/UI/UIIcon/icons');

const toPascal = (s) =>
    s
        .replace(/(^\w|-\w)/g, (m) => m.replace('-', '').toUpperCase())
        .replace(/[^a-zA-Z0-9]/g, '');

const toKebab = (s) =>
    s
        .replace(/\.svg$/i, '')
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/_/g, '-');

const normalizeSvgForCurrentColor = (svg) => {
    // 1) Убираем фиксированные width/height если они есть (viewBox оставляем)
    let out = svg
        .replace(/\s(width|height)="[^"]*"/g, '');

    // 2) Пробуем привести fill/stroke к currentColor, сохраняя "none"
    // Важно: если у вас есть бренд-цвета внутри SVG, их лучше НЕ конвертировать автоматически.
    out = out
        .replace(/stroke="(?!none)[^"]+"/g, 'stroke="currentColor"')
        .replace(/fill="(?!none)[^"]+"/g, 'fill="currentColor"');

    return out;
};

const format = async (code) => {
    const config = (await prettier.resolveConfig(process.cwd())) ?? {};
    return prettier.format(code, { ...config, parser: 'typescript' });
};

async function main() {
    await fs.mkdir(OUT_DIR, { recursive: true });

    const files = await fg(['**/*.svg'], { cwd: RAW_DIR, absolute: true });

    if (files.length === 0) {
        console.log(`No SVG files found in ${RAW_DIR}`);
        return;
    }

    const indexEntries = [];

    for (const file of files) {
        const raw = await fs.readFile(file, 'utf8');
        const normalized = normalizeSvgForCurrentColor(raw);

        const baseName = toKebab(path.basename(file));
        const componentName = `${toPascal(baseName)}Icon`;

        // SVGR -> TSX
        const tsx = await transform(
            normalized,
            {
                icon: true,
                typescript: true,
                prettier: false,

                // Важно: включаем SVGO, но НЕ ломаем viewBox
                svgo: true,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'preset-default',
                            params: {
                                overrides: { removeViewBox: false },
                            },
                        },
                    ],
                },

                // Важно: эти плагины отвечают за JSX-атрибуты (strokeWidth и т.д.)
                plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],

                // чтобы props прокидывались в <svg {...props} />
                expandProps: 'end',

                // если у тебя React 17+/Next — можно так (без React import)
                jsxRuntime: 'automatic',

                componentName,
                exportType: 'named',
                namedExport: componentName,
            },
            { componentName }
        );

        const fileOut = path.join(OUT_DIR, `${baseName}.tsx`);
        const finalCode = await format(tsx);
        await fs.writeFile(fileOut, finalCode, 'utf8');

        indexEntries.push({ baseName, componentName });
    }

    // Генерим реестр ICONS + тип IconName
    const indexTs = `
import type { FC, SVGProps } from 'react';
${indexEntries
        .map((x) => `import { ${x.componentName} } from './${x.baseName}';`)
        .join('\n')}

export const ICONS = {
${indexEntries.map((x) => `  '${x.baseName}': ${x.componentName},`).join('\n')}
} as const;

export type IconName = keyof typeof ICONS;

export type GeneratedIconComponent = FC<SVGProps<SVGSVGElement>>;
`;

    await fs.writeFile(path.join(OUT_DIR, 'index.ts'), await format(indexTs), 'utf8');

    console.log(`✅ Generated ${indexEntries.length} icons into ${OUT_DIR}`);
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
