import { PaintingBig, PaintingBigProps } from '#components/PaintingBig';
import { PaintingSmall, PaintingSmallProps } from '#components/PaintingSmall';

export type PaintingProps = PaintingSmallProps &
    PaintingBigProps & {
        variant?: 'small' | 'big';
    };

export function Painting({ variant = 'small', ...props }: PaintingProps) {
    const PaintingElement = {
        'small': PaintingSmall,
        'big': PaintingBig,
    }[variant];

    return <PaintingElement {...props} />;
}
