export default function InitialPage(pageStatus) {
    

    return (
        <div className="initial-page">
            <img src="./assets/logo.png" alt="Zap-Recall" />
            <div className="title">Zap-Recall</div>
            <button onClick={() => {
                pageStatus.pageStatus("start");
            }}>
                Iniciar Recall!</button>
        </div>
    );
}