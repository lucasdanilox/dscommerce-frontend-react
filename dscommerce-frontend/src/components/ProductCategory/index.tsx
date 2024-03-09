import './styles.css'

type Props = {
    name_category: string;
}

export default function ProductCategory({ name_category }: Props) {

    return (
        <div className="dsc-category">
            {name_category}
        </div>
    );
}