import * as React from 'react';
import { ICONS, type IconName } from './icons';

export type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'children'> & {
    name: IconName;
    size?: number;
    title?: string;       // если есть title => роль img + aria-label
    decorative?: boolean; // принудительно скрыть от screen reader
};

export const Icon = React.memo(function Icon({
                                                 name,
                                                 size = 20,
                                                 title,
                                                 decorative,
                                                 ...props
                                             }: IconProps) {
    const Glyph = ICONS[name];
    const isDecorative = decorative ?? !title;

    return (
        <Glyph
            width={size}
            height={size}
            aria-hidden={isDecorative ? true : undefined}
            role={!isDecorative ? 'img' : undefined}
            {...(!isDecorative && title ? { 'aria-label': title } : {})}
            {...props}
        />
    );
});
