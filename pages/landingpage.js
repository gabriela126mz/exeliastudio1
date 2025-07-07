export async function getServerSideProps({ res }) {
  res.statusCode = 410;     
  return { props: {} };
}

export default function Gone() {
  return null;                 
}
