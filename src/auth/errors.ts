import { findValueInEnum } from "@saleor/misc";
import { GraphQLError } from "graphql";

export enum JWTError {
  invalid = "JSONWebTokenError",
  expired = "JSONWebTokenExpired"
}

export function isJwtError(error: GraphQLError): boolean {
  return !!findValueInEnum(error.extensions.exception.code, JWTError);
}

export function isTokenExpired(error: GraphQLError): boolean {
  return error.extensions.exception.code === JWTError.expired;
}
