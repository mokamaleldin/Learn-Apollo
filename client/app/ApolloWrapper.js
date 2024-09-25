"use client";
import client from "@/lib/apolloClient";
import {ApolloProvider } from "@apollo/client";

export function ApolloWrapper({ children }) {
    return (
        <ApolloProvider client={ client }>
            { children }
        </ApolloProvider>
    );
}