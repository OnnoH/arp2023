import notFound from "../../assets/404.jpg"

function NoMatch() {
    return (
        <div style={{ padding: 20 }}>
            <h2>404: Page Not Found</h2>
            <img src={notFound} width="400" height="400" />
        </div>
    );
}

export default NoMatch