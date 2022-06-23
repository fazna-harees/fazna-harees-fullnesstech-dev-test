import React from "react";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import useCategoryLoans from "../../hooks/useCategoryLoans";
import { Container, Grid, Loading } from "../Pages.styles";
import Spinner from "../../components/Spinner/Spinner";

export default function Category() {
  const { category } = useParams();
  const { data, isSuccess, isLoading } = useCategoryLoans(category);
  return (
    <div>
      <Navbar />
      <Container>
        {isLoading && (
          <Loading>
            <Spinner />
          </Loading>
        )}
        {isSuccess && (
          <Grid>
            {data.map((i) => (
              <Card key={i.uuid} data={i} />
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
}
