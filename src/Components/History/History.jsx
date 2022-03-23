function History({ results }) {
  const liArray = results.map((item, idx) => (
    <li key={idx}>
      {item.primerTermino} {item.operador} {item.segundoTermino} ={" "}
      {item.resultado}
    </li>
  ));
  return (
    <>
      <ul>{liArray}</ul>
    </>
  );
}
export default History;
