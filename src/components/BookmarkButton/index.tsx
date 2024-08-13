import bookmarkSecondaryIconSrc from '/icon/bookmark-primary.svg';
import { IconButton, IconButtonProps } from '#components/IconButton';

export type BookmarkButtonProps = Omit<IconButtonProps, 'iconSrc' | 'alt'>;

export function BookmarkButton({ isActive, onClick }: BookmarkButtonProps) {
    return (
        <IconButton
            iconSrc={bookmarkSecondaryIconSrc}
            alt="Bookmark"
            isActive={isActive}
            onClick={onClick}
        />
    );
}
