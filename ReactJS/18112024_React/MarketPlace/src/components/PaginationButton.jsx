export const PaginationButton = ({ number, clickOnPaginationButton }) => {
    return <button onClick={() => clickOnPaginationButton(number)} className="join-item btn btn-lg">{number}</button>;
};
