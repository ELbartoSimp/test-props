interface PropsSetterProps {
  toto: string;
}

const PropsSetter = ({ toto }: PropsSetterProps) => (
  <h4>Props Setter {toto}</h4>
);

export default PropsSetter;
