function ListOfNotes({ notes, deletenote }) {

    return (
        <div>
            {notes ? notes.map((note) => 
            <li key={note.title}>
                <button onClick={(e) => deletenote(e, note.title)}>Delete</button>
                <h3>{note.title}</h3>
                <p>{note.description}</p>
            </li>
            ) : <div>'Loading...'</div>}
        </div>
    )
};

export default ListOfNotes;