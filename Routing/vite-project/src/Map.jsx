function Map() {
  const simpledata = [1, 2, 3, 4, 5];
  console.log(simpledata);
  const tdata = simpledata.map((item, index) => (
    <div key={index} style={{ color: "red" }}>
      number:{item}
    </div>
  ));
  const data = [
    {
      name: "Samir",
      roll: 1,
      address: "Dhaneshwor",
    },
    {
      name: "Nabin",
      roll: 2,
      address: "Dhaneshwor",
    },
    {
      name: "Nabina",
      roll: 3,
      address: "Baneshwor",
    },
    {
      name: "Rabin",
      roll: 4,
      address: "Panauti",
    },
    {
      name: "Sabin",
      roll: 5,
      address: "Banepa",
    },
    {
      name: "Samira",
      roll: 6,
      address: "Dhaneshwor",
    },
    {
      name: "Babin",
      roll: 7,
      address: "Nala",
    },
    {
      name: "Sandesh",
      roll: 8,
      address: "Dhulikhel",
    },
    {
      name: "Rabina",
      roll: 9,
      address: "Bhaktapur",
    },
    {
      name: "Sabina",
      roll: 10,
      address: "Banepa",
    },
  ];
  const tdataComplex = data.map((item, index) => (
    

    
    <div key={item.roll} style={{ display: "flex", justifyContent:"center"}}>
      <div
        style={{
          border: "1px solid black",
          margin: "5px",
          padding: "10px",
          width: "200px",
          boxShadow: "2px 2px 10px gray",
          display: "flex",
          justifyContent: "center",
          background:"lavender",
          color:"black",
          borderRadius:"5px",
          backgroundImage: ""
        }}
      >
       
        name={item.name}
        <br />
        roll={data[index].roll}
        <br />
        address={item.address}
        
      </div>
    </div>
    
  ));

  return (
    <>
      {/* <div>{simpledata}</div>

      <div>{tdata}</div> */}
      <div   style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "10px",
      }}
      >{tdataComplex}</div>
    </>
  );
}

export default Map;
