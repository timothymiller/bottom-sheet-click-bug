import { PButton, PText } from '@porsche-design-system/components-react';
import React, { Fragment, useState } from 'react';
import Header from '../components/header';
import { BottomSheet } from 'react-spring-bottom-sheet'

const Home = (): JSX.Element => {
  const [open, setOpen] = useState(false)

  return (
  <div className="pageLayout">
    <Header />
    <PText>To See example usage click on one of the Links above.</PText>
    <PButton onClick={() => setOpen(true)}>Open bottom sheet</PButton>
    <BottomSheet open={open} header={
        <Fragment>
          <PButton onClick={() => setOpen(false)}>Close Sheet</PButton>
          <button onClick={() => setOpen(false)}>Close Sheet</button>
        </Fragment>
      }>My awesome content here</BottomSheet>
  </div>
)}

export default Home;
