type Props = {
    openSidebarClick: () => void;
    title: string;
    newChatClick: () => void;
}

export const Header = ({openSidebarClick, title, newChatClick}: Props) => {
    return(
        <header className="flex justify-between items-center w-full border-b border-b-gray-600 p-2 md:hidden">
            ...
        </header>
    );
}