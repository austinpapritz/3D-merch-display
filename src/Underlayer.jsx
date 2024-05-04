import styled from 'styled-components'

const Grid = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  font-family: 'ThunderBlack';
  font-size: 4em;
  line-height: 2.5em;
  color: #fdb927;
  text-align: center;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`

const Left = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  width: 100%;
  height: 100%;
  padding-top: 200px;
  white-space: nowrap;
  font-family: 'ThunderThin';
  line-height: 1em;
  background: #26282a;
  @media (max-width: 768px) {
    padding: 50px;
  }
`

const Right = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: #fdb927;
  color: #26282a;
`

const Sub = styled.div`
  align-self: center;
  padding-top: 100px;
  width: 100%;
  height: 2px;
  background: #006bb6;
`

const Jumbo = styled.div`
  align-self: top;
  padding: 25px;
  font-size: 2.2em;
  color: #26282a;
`

const Label = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-family: 'ThunderThin';
  font-size: 0.2em;
  line-height: 1em;
  color: #26282a;
  padding: 100px;

  @media (max-width: 768px) {
    padding: 50px;
  }

  @media (max-width: 425px) {
    padding: 20px;
  }
`

export default function Underlay() {
  return (
    <Grid>
      <Left>
        <div>
          GOLDEN
          <br />
          STATE
          <br />
          <img src="./Golden-State-Warriors-Logo-PNG-Picture.png" alt="Golden State Warriors" height="200px" />
        </div>
      </Left>
      <Right>
        <Jumbo>BUNDLE TO SAVE</Jumbo>
      </Right>
      <Label>$149.99</Label>
    </Grid>
  )
}
