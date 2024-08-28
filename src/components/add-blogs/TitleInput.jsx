export default function TitleInput({ onChangeHandler, title }) {
    return (
        <input
            type="text"
            name="title"
            value={title}
            className="input bg-gray-700 text-xl"
            placeholder="Title"
            onChange={onChangeHandler}
        />
    );
}
