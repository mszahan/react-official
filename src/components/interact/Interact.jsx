import ToolBar from './Event';
import NoState from './NoState';
import InfoCard from './InfoCard';
import SanpShot from './SnapShot';
import Que from './Que';
import ObjectState from './ObjectState';
import ArrayState from './ArrayState';
import Art from './Art';

function Interact() {
  return (
    <div className="interact">
      <h1>Adding interactivity</h1>
      <Art />
      <ToolBar />
      <NoState />
      <InfoCard />
      <SanpShot />
      <Que />
      <ObjectState />
      <ArrayState />
    </div>
  );
}

export default Interact;
