import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
   __typename?: 'Query';
  post: Post;
  posts: Array<Post>;
  myPosts: Array<Post>;
  articles: Array<Article>;
  articleSections: Array<ArticleSection>;
  article?: Maybe<Article>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryArticleArgs = {
  id: Scalars['ID'];
};

export type Post = {
   __typename?: 'Post';
  id: Scalars['ID'];
  title: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  author: User;
  active: Scalars['Boolean'];
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  post: Array<Post>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Article = {
   __typename?: 'Article';
  id: Scalars['ID'];
  title: Scalars['String'];
  paragraphs: Array<Paragraph>;
  active: Scalars['Boolean'];
  advanced: Scalars['Boolean'];
  deleted: Scalars['Boolean'];
  img?: Maybe<Scalars['String']>;
  section?: Maybe<ArticleSection>;
};

export type Paragraph = {
   __typename?: 'Paragraph';
  id: Scalars['ID'];
  body: Scalars['String'];
  deleted: Scalars['Boolean'];
  article: Article;
};

export type ArticleSection = {
   __typename?: 'ArticleSection';
  id: Scalars['ID'];
  title: Scalars['String'];
  active: Scalars['Boolean'];
  advanced: Scalars['Boolean'];
  deleted: Scalars['Boolean'];
  articles: Array<Maybe<Article>>;
};

export type Mutation = {
   __typename?: 'Mutation';
  signup: AuthPayload;
  login: AuthPayload;
  createPost: Post;
  createArticle: Article;
  updateArticle: Article;
  createArticleSection: ArticleSection;
  updateArticleSection: ArticleSection;
};


export type MutationSignupArgs = {
  signUpInput?: Maybe<SignUpInput>;
};


export type MutationLoginArgs = {
  loginInput?: Maybe<LoginInput>;
};


export type MutationCreatePostArgs = {
  postInput?: Maybe<PostInput>;
};


export type MutationCreateArticleArgs = {
  articleInput?: Maybe<ArticleInput>;
};


export type MutationUpdateArticleArgs = {
  articleUpdateInput?: Maybe<ArticleUpdateInput>;
};


export type MutationCreateArticleSectionArgs = {
  articleSectionInput?: Maybe<ArticleSectionInput>;
};


export type MutationUpdateArticleSectionArgs = {
  articleSectionUpdateInput?: Maybe<ArticleSectionUpdateInput>;
};

export type SignUpInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AuthPayload = {
   __typename?: 'AuthPayload';
  id: Scalars['ID'];
  email: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type PostInput = {
  title: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
};

export type ArticleInput = {
  title: Scalars['String'];
  paragraphs: Array<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  section?: Maybe<Scalars['String']>;
  advanced?: Maybe<Scalars['Boolean']>;
  img?: Maybe<Scalars['String']>;
};

export type ArticleUpdateInput = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  paragraphs?: Maybe<Array<ParagraphUpdateInput>>;
  newParagraphs?: Maybe<Array<Scalars['String']>>;
  advanced?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  active?: Maybe<Scalars['Boolean']>;
  img?: Maybe<Scalars['String']>;
};

export type ParagraphUpdateInput = {
  id: Scalars['ID'];
  deleted?: Maybe<Scalars['Boolean']>;
  body?: Maybe<Scalars['String']>;
};

export type ArticleSectionInput = {
  title: Scalars['String'];
};

export type ArticleSectionUpdateInput = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  advanced?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  articles?: Maybe<Array<Maybe<ArticleUpdateInput>>>;
};

export type LoginMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'email' | 'id'>
  ) }
);

export type SignUpMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { signup: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'email' | 'id'>
  ) }
);

export type ArticleSectionsQueryVariables = {};


export type ArticleSectionsQuery = (
  { __typename: 'Query' }
  & { articleSections: Array<(
    { __typename: 'ArticleSection' }
    & Pick<ArticleSection, 'title' | 'id'>
    & { articles: Array<Maybe<(
      { __typename: 'Article' }
      & Pick<Article, 'id' | 'img' | 'title'>
      & { section?: Maybe<(
        { __typename?: 'ArticleSection' }
        & Pick<ArticleSection, 'id' | 'title'>
      )>, paragraphs: Array<(
        { __typename: 'Paragraph' }
        & Pick<Paragraph, 'id' | 'body'>
      )> }
    )>> }
  )> }
);

export type ArticleQueryVariables = {
  id: Scalars['ID'];
};


export type ArticleQuery = (
  { __typename: 'Query' }
  & { article?: Maybe<(
    { __typename: 'Article' }
    & Pick<Article, 'id' | 'title' | 'active'>
    & { paragraphs: Array<(
      { __typename: 'Paragraph' }
      & Pick<Paragraph, 'id' | 'body'>
    )> }
  )> }
);

export type CreatePostMutationVariables = {
  body?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
};


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename: 'Post' }
    & Pick<Post, 'id' | 'body' | 'active' | 'title'>
    & { author: (
      { __typename: 'User' }
      & Pick<User, 'email'>
    ) }
  ) }
);

export type MyPostsQueryVariables = {};


export type MyPostsQuery = (
  { __typename: 'Query' }
  & { myPosts: Array<(
    { __typename: 'Post' }
    & Pick<Post, 'title' | 'body' | 'active' | 'id'>
    & { author: (
      { __typename: 'User' }
      & Pick<User, 'id' | 'email'>
    ) }
  )> }
);

export type PostsQueryVariables = {};


export type PostsQuery = (
  { __typename: 'Query' }
  & { posts: Array<(
    { __typename: 'Post' }
    & Pick<Post, 'title' | 'body' | 'active' | 'id'>
    & { author: (
      { __typename: 'User' }
      & Pick<User, 'id' | 'email'>
    ) }
  )> }
);


export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(loginInput: {email: $email, password: $password}) {
    email
    id
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    
export type LoginProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>
    } & TChildProps;
export function withLogin<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginMutation,
  LoginMutationVariables,
  LoginProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps, TDataName>>(LoginDocument, {
      alias: 'login',
      ...operationOptions
    });
};

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($email: String!, $password: String!) {
  signup(signUpInput: {email: $email, password: $password}) {
    email
    id
  }
}
    `;
export type SignUpMutationFn = ApolloReactCommon.MutationFunction<SignUpMutation, SignUpMutationVariables>;
export type SignUpComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SignUpMutation, SignUpMutationVariables>, 'mutation'>;

    export const SignUpComponent = (props: SignUpComponentProps) => (
      <ApolloReactComponents.Mutation<SignUpMutation, SignUpMutationVariables> mutation={SignUpDocument} {...props} />
    );
    
export type SignUpProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<SignUpMutation, SignUpMutationVariables>
    } & TChildProps;
export function withSignUp<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SignUpMutation,
  SignUpMutationVariables,
  SignUpProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, SignUpMutation, SignUpMutationVariables, SignUpProps<TChildProps, TDataName>>(SignUpDocument, {
      alias: 'signUp',
      ...operationOptions
    });
};

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        return ApolloReactHooks.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, baseOptions);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = ApolloReactCommon.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = ApolloReactCommon.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const ArticleSectionsDocument = gql`
    query ArticleSections {
  __typename
  articleSections {
    title
    __typename
    id
    articles {
      __typename
      id
      img
      title
      section {
        id
        title
      }
      paragraphs {
        __typename
        id
        body
      }
    }
  }
}
    `;
export type ArticleSectionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ArticleSectionsQuery, ArticleSectionsQueryVariables>, 'query'>;

    export const ArticleSectionsComponent = (props: ArticleSectionsComponentProps) => (
      <ApolloReactComponents.Query<ArticleSectionsQuery, ArticleSectionsQueryVariables> query={ArticleSectionsDocument} {...props} />
    );
    
export type ArticleSectionsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ArticleSectionsQuery, ArticleSectionsQueryVariables>
    } & TChildProps;
export function withArticleSections<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ArticleSectionsQuery,
  ArticleSectionsQueryVariables,
  ArticleSectionsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ArticleSectionsQuery, ArticleSectionsQueryVariables, ArticleSectionsProps<TChildProps, TDataName>>(ArticleSectionsDocument, {
      alias: 'articleSections',
      ...operationOptions
    });
};

/**
 * __useArticleSectionsQuery__
 *
 * To run a query within a React component, call `useArticleSectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleSectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleSectionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useArticleSectionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ArticleSectionsQuery, ArticleSectionsQueryVariables>) {
        return ApolloReactHooks.useQuery<ArticleSectionsQuery, ArticleSectionsQueryVariables>(ArticleSectionsDocument, baseOptions);
      }
export function useArticleSectionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ArticleSectionsQuery, ArticleSectionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ArticleSectionsQuery, ArticleSectionsQueryVariables>(ArticleSectionsDocument, baseOptions);
        }
export type ArticleSectionsQueryHookResult = ReturnType<typeof useArticleSectionsQuery>;
export type ArticleSectionsLazyQueryHookResult = ReturnType<typeof useArticleSectionsLazyQuery>;
export type ArticleSectionsQueryResult = ApolloReactCommon.QueryResult<ArticleSectionsQuery, ArticleSectionsQueryVariables>;
export const ArticleDocument = gql`
    query Article($id: ID!) {
  __typename
  article(id: $id) {
    __typename
    id
    title
    active
    paragraphs {
      __typename
      id
      body
    }
  }
}
    `;
export type ArticleComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ArticleQuery, ArticleQueryVariables>, 'query'> & ({ variables: ArticleQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ArticleComponent = (props: ArticleComponentProps) => (
      <ApolloReactComponents.Query<ArticleQuery, ArticleQueryVariables> query={ArticleDocument} {...props} />
    );
    
export type ArticleProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ArticleQuery, ArticleQueryVariables>
    } & TChildProps;
export function withArticle<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ArticleQuery,
  ArticleQueryVariables,
  ArticleProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ArticleQuery, ArticleQueryVariables, ArticleProps<TChildProps, TDataName>>(ArticleDocument, {
      alias: 'article',
      ...operationOptions
    });
};

/**
 * __useArticleQuery__
 *
 * To run a query within a React component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArticleQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
        return ApolloReactHooks.useQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, baseOptions);
      }
export function useArticleLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, baseOptions);
        }
export type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
export type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
export type ArticleQueryResult = ApolloReactCommon.QueryResult<ArticleQuery, ArticleQueryVariables>;
export const CreatePostDocument = gql`
    mutation createPost($body: String, $active: Boolean, $title: String!) {
  createPost(postInput: {title: $title, body: $body, active: $active}) {
    __typename
    author {
      __typename
      email
    }
    id
    body
    active
    title
  }
}
    `;
export type CreatePostMutationFn = ApolloReactCommon.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;
export type CreatePostComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreatePostMutation, CreatePostMutationVariables>, 'mutation'>;

    export const CreatePostComponent = (props: CreatePostComponentProps) => (
      <ApolloReactComponents.Mutation<CreatePostMutation, CreatePostMutationVariables> mutation={CreatePostDocument} {...props} />
    );
    
export type CreatePostProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreatePostMutation, CreatePostMutationVariables>
    } & TChildProps;
export function withCreatePost<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreatePostMutation,
  CreatePostMutationVariables,
  CreatePostProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreatePostMutation, CreatePostMutationVariables, CreatePostProps<TChildProps, TDataName>>(CreatePostDocument, {
      alias: 'createPost',
      ...operationOptions
    });
};

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      body: // value for 'body'
 *      active: // value for 'active'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        return ApolloReactHooks.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, baseOptions);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = ApolloReactCommon.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const MyPostsDocument = gql`
    query myPosts {
  __typename
  myPosts {
    __typename
    title
    body
    active
    id
    author {
      __typename
      id
      email
    }
  }
}
    `;
export type MyPostsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MyPostsQuery, MyPostsQueryVariables>, 'query'>;

    export const MyPostsComponent = (props: MyPostsComponentProps) => (
      <ApolloReactComponents.Query<MyPostsQuery, MyPostsQueryVariables> query={MyPostsDocument} {...props} />
    );
    
export type MyPostsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<MyPostsQuery, MyPostsQueryVariables>
    } & TChildProps;
export function withMyPosts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MyPostsQuery,
  MyPostsQueryVariables,
  MyPostsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, MyPostsQuery, MyPostsQueryVariables, MyPostsProps<TChildProps, TDataName>>(MyPostsDocument, {
      alias: 'myPosts',
      ...operationOptions
    });
};

/**
 * __useMyPostsQuery__
 *
 * To run a query within a React component, call `useMyPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyPostsQuery, MyPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<MyPostsQuery, MyPostsQueryVariables>(MyPostsDocument, baseOptions);
      }
export function useMyPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyPostsQuery, MyPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyPostsQuery, MyPostsQueryVariables>(MyPostsDocument, baseOptions);
        }
export type MyPostsQueryHookResult = ReturnType<typeof useMyPostsQuery>;
export type MyPostsLazyQueryHookResult = ReturnType<typeof useMyPostsLazyQuery>;
export type MyPostsQueryResult = ApolloReactCommon.QueryResult<MyPostsQuery, MyPostsQueryVariables>;
export const PostsDocument = gql`
    query posts {
  __typename
  posts {
    __typename
    title
    body
    active
    id
    author {
      __typename
      id
      email
    }
  }
}
    `;
export type PostsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PostsQuery, PostsQueryVariables>, 'query'>;

    export const PostsComponent = (props: PostsComponentProps) => (
      <ApolloReactComponents.Query<PostsQuery, PostsQueryVariables> query={PostsDocument} {...props} />
    );
    
export type PostsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<PostsQuery, PostsQueryVariables>
    } & TChildProps;
export function withPosts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PostsQuery,
  PostsQueryVariables,
  PostsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, PostsQuery, PostsQueryVariables, PostsProps<TChildProps, TDataName>>(PostsDocument, {
      alias: 'posts',
      ...operationOptions
    });
};

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        return ApolloReactHooks.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, baseOptions);
      }
export function usePostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, baseOptions);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = ApolloReactCommon.QueryResult<PostsQuery, PostsQueryVariables>;