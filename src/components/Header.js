import React from 'react';
import { Box, Column, Heading } from 'gestalt';
import 'gestalt/dist/gestalt.css';

const Header = () =>  {
    return (<Box display="flex" direction="row" paddingY={1}>
    <Column span={10}>
      <Box padding={3}>
        <Heading size="lg">Just a Demo for CSS451 & CSS454 project</Heading>
      </Box>
    </Column>
    </Box>);
}

export default Header;