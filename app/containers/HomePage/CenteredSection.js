import styled from 'styled-components';
import Section from './Section';

const CenteredSection = styled(Section)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default CenteredSection;
