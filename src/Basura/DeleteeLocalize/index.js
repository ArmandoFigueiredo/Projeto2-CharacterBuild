function handleToast() {
    toast((t) => (
        <span>
          Você realmente quer <b>deletar</b> essa ficha?
          <button onClick={() => {
            handleDlete(t)                    
          }}>Sim</button>
          <button onClick={() => toast.dismiss(t.id)}>Não</button>
        </span>
      ));
}
async function handleDlete(t) {
    try{
        await axios.delete(`https://ironrest.herokuapp.com/chrbuilder/${formPri}`, formPri);

        toast.dismiss(t.id);
        navigate("/");
    }catch (err){
        console.log(err);
    }
}    
