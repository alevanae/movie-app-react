import Banner from "../comp/Banner";
import Row from "../comp/Row";
import { requests } from "../requests";

function Main() {
  return (
    <div>
      <Banner />
      <Row request={requests.fetchNetflixOriginals} title="" />
      <Row request={requests.fetchTrending} title="Xu hướng" />
      <Row request={requests.fetchTopRated} title="Xếp hạng cao" />
      <Row request={requests.fetchActionMovies} title="Hành động" />
      <Row request={requests.fetchComedyMovies} title="Hài" />
      <Row request={requests.fetchHorrorMovies} title="Kinh dị" />
      <Row request={requests.fetchRomanceMovies} title="Lãng mạn" />
      <Row request={requests.fetchDocumentaries} title="Tài liệu" />
    </div>
  );
}

export default Main;
