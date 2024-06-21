import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCertificates } from '../../actions/MainActions';

function Rospatent() {
  const [myRospatent, setPatent] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCertificates());
  }, []);

  const certificates = useSelector((state) => state.Data.certificates);
  const rospatent = certificates.find((data) => data.id === 6);

  useEffect(() => {
    if (rospatent) {
      setPatent(rospatent.image_full_url);
    }
  }, [rospatent]);


  return (
    <div className='rospatent'>
      <img src={myRospatent} alt="Rospatent Certificate" />
    </div>
  );
}

export default Rospatent;
