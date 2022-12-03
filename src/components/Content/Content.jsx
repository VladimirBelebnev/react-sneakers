import ContentItem from '../ContentItem/ContentIten';
import "./Content.scss";

const Content = () => {
    return (
        <div className="content">
            <h1>Все кроссовки</h1>
            <div className="content-items">
                <ContentItem />
            </div>
        </div>
    );
};

export default Content;