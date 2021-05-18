import React, { useState, useEffect } from 'react';
import Title from '../../UsableComponents/Title/Title';
import Search from '../../UsableComponents/Search/Search';
import InfoContainer from '../../UsableComponents/Containers/InfoContainer';
import TableRegims from './Table/TableRegims';
import ModalButton from '../../UsableComponents/Buttons/ModalButton';
import NewRegimen from './NewRegimen';
import Modal from '../../UsableComponents/Modal/Modal';
import RequestService from '../../../config';

const Regimenes = () => {

  const [regime, setRegimes] = useState([]);
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNew, setIsOpenNew] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const viewModal = () => (isOpen ? setIsOpen(false) : setIsOpen(true));
  const viewModalNew = () => (isOpenNew ? setIsOpenNew(false) : setIsOpenNew(true));

  const getRegimes = async () => {
    const { data } = await RequestService.get('/regime');
    const { regimes } = data;
    setRegimes(regimes);
    setData(regime);
  };

  useEffect(() => {
    getRegimes();
  }, [isOpen, isOpenNew, isActive]);

  const handleSearch = (keyWord) => {
    const results = data.filter((item) => item.name === keyWord);
    setRegimes(results);
  };

  const handleActive = (data) => {
    const results = data;
    setIsActive(results);
  };

  return (
    <>
      <Title title='RÉGIMENES'>
        <ModalButton onClick={() => viewModalNew()} />
      </Title>
      <Search onClick={handleSearch} />
      <InfoContainer>
        <TableRegims
          regime={regime}
          isOpen={isOpen}
          activation={handleActive}
          viewModal={() => viewModal()}
        />
      </InfoContainer>
      {isOpenNew && (
        <Modal className='ModalContainer'>
          <NewRegimen onClick={() => viewModalNew()} />
        </Modal>
      )}
    </>
  );
};

export default Regimenes;
