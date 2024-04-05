import React, { useState, useEffect } from 'react';

export default function Movies() {
    const [mode, setMode] = useState("add");
    const [carryid, setID] = useState(null);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [tags, setTags] = useState([]);
    const [books, setBooks] = useState([
        {
            'id': 101,
            'title': 'Dune',
            'author': 'Frank Herbert',
            'genre': 'science-fiction',
            'tags': ['futuristic', 'classics']
        },
        {
            'id': 102,
            'title': 'The Lord of the Rings: The Fellowship of the Ring',
            'author': 'J.R.R Tolkien',
            'genre': 'fantasy',
            'tags': ['door-stopper', 'trilogy']
        }
    ]);

    const handleCheckBoxes = (event) => {
        const value = event.target.value;
        if (event.target.checked) {
            setTags(prevTags => [...prevTags, value]);
        } else {
            setTags(prevTags => prevTags.filter(tag => tag !== value));
        }
    };

    const handleUpdate = (id) => {
        if (!id) {
            console.log("error no id found");
            setMode("add")
        } else {
            const updateIndex = books.findIndex(book => book.id == id)
            const modifiedBook = {
                'id': id,
                'title': title,
                'author': author,
                'genre': genre,
                'tags': tags
            };
            books.splice(updateIndex, 1, modifiedBook);
            setMode("add")
        }

    }
    const handleClickAdd = () => {
        const newBook = {
            'id': Math.floor(Math.random() * 10000),
            'title': title,
            'author': author,
            'genre': genre,
            'tags': tags
        };
        setBooks(prevBooks => [...prevBooks, newBook]);
    };

    const updateBook = (id) => {
        const bookToUpdate = books.find(book => book.id === id);
        if (!bookToUpdate) {
            console.error(`Book with ID ${id} not found.`);
            return;
        }
        setTitle(bookToUpdate.title);
        setAuthor(bookToUpdate.author);
        setGenre(bookToUpdate.genre);
        setTags(bookToUpdate.tags);
        setID(bookToUpdate.id);
        setMode("edit");

    };

    const deleteBook = (id) => {
        setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
    };

    const displayBooks = (books) => {
        return books.map(book => (
            <div key={book.id}>
                
                <h2><span>id-{book.id}</span>[- {book.title} ]</h2>
                <p>By {book.author}</p>
                <p><b>Genre</b>: {book.genre}</p>
                <p><b>Tags:</b> {book.tags.join(', ')}</p>
                <button onClick={() => updateBook(book.id)}>Edit</button>
                <button onClick={() => deleteBook(book.id)}>Delete</button>
                <div>****************************************</div>
            </div>
        ));
    };

    return (
        <div className="container">
            <div className="col">
                {displayBooks(books)}
            </div>
            <div className='col'>
                <h3>Add Book</h3>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" value={title} onChange={(event) => setTitle(event.target.value)} />
                </div>
                <div>
                    <label>Author</label>
                    <input type="text" name="author" value={author} onChange={(event) => setAuthor(event.target.value)} />
                </div>
                <div>
                    <label>Genre</label>
                    <input type="radio" name="genre" value="fantasy" checked={genre === "fantasy"} onChange={(e) => setGenre(e.target.value)} />
                    <label>Fantasy</label>
                    <input type="radio" name="genre" value="science-fiction" checked={genre === "science-fiction"} onChange={(e) => setGenre(e.target.value)} />
                    <label>Science Fiction</label>
                </div>
                <div>
                    <label>Tags</label>
                    <input type="checkbox" name="tags" value="classics" checked={tags.includes("classics")} onChange={handleCheckBoxes} /><label>Classics</label>
                    <input type="checkbox" name="tags" value="door-stopper" checked={tags.includes("door-stopper")} onChange={handleCheckBoxes} /><label>Doorstopper</label>
                    <input type="checkbox" name="tags" value="futuristic" checked={tags.includes("futuristic")} onChange={handleCheckBoxes} /><label>Futuristic</label>
                    <input type="checkbox" name="tags" value="trilogy" checked={tags.includes("trilogy")} onChange={handleCheckBoxes} /><label>Trilogy</label>
                </div>
                <div>
                <button onClick={handleClickAdd} disabled={mode !== "add"}>Add Book</button>
                <button onClick={() => handleUpdate(carryid)}  disabled={mode === "add"}>Update Book</button>
                   

                </div>
            </div>
        </div>
    );
}