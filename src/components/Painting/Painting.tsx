import { PaintingSmall, PaintingSmallProps } from '#components/PaintingSmall';
import { PaintingBig, PaintingBigProps } from '#components/PaintingBig';

type PaintingProps = PaintingSmallProps &
    PaintingBigProps & {
        variant?: 'small' | 'big';
    };

function Painting({ variant = 'small', ...props }: PaintingProps) {
    const PaintingElement = {
        'small': PaintingSmall,
        'big': PaintingBig,
    }[variant];

    return <PaintingElement {...props} />;
}

export type { PaintingProps };
export { Painting };