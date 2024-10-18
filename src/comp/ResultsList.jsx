import Row from "./Row";
function ResultsList({ searchRequest }) {
  return (
    <div className="p-8">
      {searchRequest === "" ? (
        ""
      ) : (
        <h2 className="text-white font-bold text-[24px]">Search Results</h2>
      )}
      <Row
        title="search"
        requestBody={searchRequest}
        request={"http://localhost:5000/api/movies/search?token=RYoOcWM4JW"}
      />
    </div>
  );
}

export default ResultsList;
