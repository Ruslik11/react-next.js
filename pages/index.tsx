import {useState} from "react";
import {Button, Htag, Input, P, Rating, Tag, Textarea} from "../components";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interfaces";
import {API} from "../helpers/api";
import {Error404} from "./404";

function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return <Error404 />;

    return (
        <>
            <Htag tag='h1'>Text</Htag>
            <Button appearance='primary' arrow='right'>Button</Button>
            <Button appearance='ghost' arrow='down'>Button</Button>
            <P size='s'>Small</P>
            <P>Middle</P>
            <P size='l'>Big</P>
            <Tag size='s'>Ghost</Tag>
            <Tag size='m' color='red'>Red</Tag>
            <Tag size='s' color='green'>Green</Tag>
            <Tag color='primary'>Green</Tag>
            <Rating rating={rating} isEditable setRating={setRating} />
            <Input placeholder={'Test'} />
            <Textarea placeholder={'Test'} />
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
        firstCategory
    });
  return {
      props: {
          menu,
          firstCategory
      }
  };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: number
}

