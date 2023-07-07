import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



export default function Detail() {
  const { id } = useParams(); 

  const [pjDetail, setPjDetail] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
         
          setPjDetail(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => window.alert("Error"));

   
    return () => {
    
      console.log("Me desmonto, adios!");
    };

  }, []);

  return (
    <div>
      <h3>{pjDetail.name && pjDetail.name}</h3>
      <h5>{pjDetail.status ? pjDetail.status : ":( no hay status"}</h5>
      <img src={pjDetail.image} alt={pjDetail.name} />
      <section>
        <span>🐞{pjDetail.species}</span>
        <span> ♀ {pjDetail.gender}</span>
        <span>🌍 {pjDetail.origin?.name}</span>
      </section>
    </div>
  );
}

