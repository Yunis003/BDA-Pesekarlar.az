import './join.css';
import professionalsImage from '../assets/join.svg';

const JoinUsCard = () => {
  return (
      <div className="join-us-card">
        <div className="join-us-content">
          <h2 className="join-us-title">
            Aramıza qoşulmağa <br /> nə deyirsən?
          </h2>
          <p className="join-us-description">
            Yüzlərlə peşəkar sırasına sən də qoşul!
          </p>
          <div className="join-us-form">
            <input placeholder="Nömrəni qeyd et" maxLength={10} value="+994"/>
            <button>Qeydiyyatdan keç</button>
          </div>
        </div>
        <div className="join-us-image-container">
          <img src={professionalsImage} alt="Peşəkarlar" className="professionals-image" />
        </div>
      </div>
  );
};

export default JoinUsCard;
