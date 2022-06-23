import React from "react";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import Spinner from "../../components/Spinner/Spinner";
import useLoans from "../../hooks/useLoans";
import { Container, Grid, Loading } from "../Pages.styles";

export default function Home() {
  const { data, isSuccess, isLoading } = useLoans();
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
