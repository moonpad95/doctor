import Iframe from 'react-iframe'

export default function Map()  {
    return (
        <div style={{ height: "50vh", borderRadius: "15%"}}>
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14578.774235029043!2d-104.6329537!3d24.006596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb78af0b23967%3A0xa17419adc2b10faa!2sCorporativo%20Medi-KT!5e0!3m2!1ses-419!2smx!4v1703850991509!5m2!1ses-419!2smx"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
}
