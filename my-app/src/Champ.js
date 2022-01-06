const Champ = ({ champ, onDelete, onShow }) => {
    return (
        <div className="champ">
            <div className="name">Name:</div>
            <div className="value">{champ.name}</div>
            <div
                className="value"
                onClick={() => onDelete(champ.id)}
                style={{
                    cursor: 'pointer',
                    color: 'red'
                }}
            >
                X
            </div>
            <div
                className="value"
                onClick={() => onShow(champ.id)}
                style={{
                    cursor: 'pointer',
                    color: 'green'
                }}
            >
                {champ.reminder} 0
            </div>
        </div>
    )
}

export default Champ