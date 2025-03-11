function TaskInput(){
    return(
        <>
            <input placeholder="Enter a task..." type="text" />
            <button 
                style={{
                        borderRadius: "50%",
                        border: "3px solid white",
                        padding:"11.505px 16.455px"
                    }}>
                +
            </button>            
        </>
    )
}

export default TaskInput