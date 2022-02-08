const languages = (props) => {
    if(props.lang === 'de') {
        return 'Hallo';
      }
      if(props.lang === 'en') {
        return 'Hello';
      }
      if(props.lang === 'fr') {
        return 'Bonjour';
      }
      else{
        return 'Hola';
      }
    };


    function Greetings(props) {
        return (
            <div className="greetings">
                <p>{languages(props)} {props.children}</p>
            </div>
    );

}
    


export default Greetings;