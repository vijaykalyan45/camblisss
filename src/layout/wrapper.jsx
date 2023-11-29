import React, { useEffect, useState } from 'react';
import BackToTopCom from '@components/common/scroll-to-top/scroll-to-top';
import { animationCreate } from '@utils/utils';
import Preloader from '@components/preloader';

const Wrapper = ({children}) => {
  const [isLoading, setIsLoading]= useState(true)
  useEffect(() => {
    setTimeout(() => {
      animationCreate()
      setIsLoading(false)
    }, 2000);
  },[])
  return (
    <>
    {
      isLoading ? <Preloader/> :
      <>
      {children}
      <BackToTopCom/>
      </>
    }
    </>
  );
};

export default Wrapper;