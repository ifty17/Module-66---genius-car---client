import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true);
    const searchRef = useRef();
    const[search, setSearch] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${search}&order=${ isAsc ? 'asc' : 'desc'}`)
          .then((res) => res.json())
          .then((data) => setServices(data));
    },[isAsc, search]);

    const handleSearch = () =>{
        setSearch(searchRef.current.value);
    }

    return (
      <div>
        <div className="text-center mb-4">
          <p className="text-2xl font-bold text-orange-600">Service</p>
          <h2 className="text-5xl font-semibold">Our service area</h2>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which don't look even slightly
            believable.
          </p>
          <input
            ref={searchRef}
            className="input input-bordered w-full max-w-xs"
            type="text"
          />
          <button onClick={handleSearch} className="btn btn-ghost">Search</button>
          <button className="btn btn-ghost" onClick={() => setIsAsc(!isAsc)}>
            {isAsc ? "desc" : "asc"}
          </button>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    );
};

export default Services;