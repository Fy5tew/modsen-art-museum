import bookmarkSecondaryIconSrc from '/icon/bookmark-primary.svg';
import { IconButton, IconButtonProps } from '#components/IconButton';

type BookmarkButtonProps = Omit<IconButtonProps, 'iconSrc' | 'alt'>;

function BookmarkButton({ isActive, onClick }: BookmarkButtonProps) {
    return (
        <IconButton
            iconSrc={bookmarkSecondaryIconSrc}
            alt="Bookmark"
            isActive={isActive}
            onClick={onClick}
        />
    );
}

export type { BookmarkButtonProps };
export { BookmarkButton };
