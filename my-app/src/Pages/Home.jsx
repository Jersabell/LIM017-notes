import NoteCard from "../components/Home/NoteCard";
import ListOfNotes from "../components/Home/ListOfNotes";
import { useEffect } from "react";
import { dbUserNotes, readCollection, getDocsOfCollections, deleteNote } from "../FirebaseService/controllers";
import { useState } from "react";

function Home() {

    const [notes, setNotes] = useState('');

    const uidUser = localStorage.getItem('USER_UID');

    const getNotes = getDocsOfCollections(readCollection(uidUser), (querySnapshot) => {
        return setNotes(querySnapshot.docs.map((doc) => (doc.data())))
    });

    const createdNote = (title, description) => dbUserNotes(uidUser, title, description);

    const deleteThisNote = (e, id) => {
        e.preventDefault();
        return deleteNote(uidUser, id);
    }

    useEffect(() => {
        async function getData(){
            const data = await getNotes;
            return data;
        }
        getData();
    }, []);

    return (
        <div>
            <h2>AQUI HOME USER LOGEADO</h2>
            <button>Añade una nota</button>
            <NoteCard sendNoteToDB={createdNote} />
            <ListOfNotes notes={notes} deletenote={deleteThisNote}/>
        </div>

    )
};
export default Home;