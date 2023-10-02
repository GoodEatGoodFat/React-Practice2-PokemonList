const SetPerPage = ({setPerPage}) => {
  const pagelist = [5, 10, 20];
  // console.log(setPerPage)
  return (
    <ul>
      {pagelist.map((num) => {
        return (
          <a
            href="!#"
            className="page-link"
            key={num}
            onClick={() => setPerPage(num)}
          >
            {num}
          </a>
        );
      })}
    </ul>
  );
};

export default SetPerPage;
