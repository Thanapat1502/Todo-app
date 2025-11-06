--
-- PostgreSQL database dump
--

\restrict NyVHOnf6AnP7HJwgGTmL5IiBb9PKYWrx4jnH9D9AS3faFEpRUf3LbIo7ykyLkld

-- Dumped from database version 15.14 (Debian 15.14-1.pgdg13+1)
-- Dumped by pg_dump version 15.14 (Debian 15.14-1.pgdg13+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


--
-- Name: ItemStatusEnum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."ItemStatusEnum" AS ENUM (
    'PENDING',
    'DONE'
);


ALTER TYPE public."ItemStatusEnum" OWNER TO postgres;

--
-- Name: UserRoleEnum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."UserRoleEnum" AS ENUM (
    'ADMIN',
    'USER'
);


ALTER TYPE public."UserRoleEnum" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Item" (
    id integer NOT NULL,
    user_id integer NOT NULL,
    item_name text NOT NULL,
    status public."ItemStatusEnum" DEFAULT 'PENDING'::public."ItemStatusEnum" NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Item" OWNER TO postgres;

--
-- Name: Item_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Item_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Item_id_seq" OWNER TO postgres;

--
-- Name: Item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Item_id_seq" OWNED BY public."Item".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    username text NOT NULL,
    role public."UserRoleEnum" DEFAULT 'USER'::public."UserRoleEnum" NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."User_id_seq" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item (
    id integer NOT NULL,
    user_id integer NOT NULL,
    item_name character varying NOT NULL,
    status character varying DEFAULT 'PENDING'::character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.item OWNER TO postgres;

--
-- Name: item_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.item_id_seq OWNER TO postgres;

--
-- Name: item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.item_id_seq OWNED BY public.item.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    username character varying NOT NULL,
    role character varying DEFAULT false NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: Item id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Item" ALTER COLUMN id SET DEFAULT nextval('public."Item_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Name: item id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item ALTER COLUMN id SET DEFAULT nextval('public.item_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: Item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Item" (id, user_id, item_name, status, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, email, password, username, role, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
7b214e2b-0ff3-40f7-9a40-90ee529a0a5e	0a250f80b35236df7cc21451702db7059a55606922a51ffb0b9eb02a7c08ab06	2025-11-03 07:18:05.728116+00	20251103071805_init	\N	\N	2025-11-03 07:18:05.694158+00	1
\.


--
-- Data for Name: item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.item (id, user_id, item_name, status, created_at, updated_at) FROM stdin;
2	4	Test edit for id 2	PENDING	2025-11-05 04:51:44.087819	2025-11-05 05:19:36.059325
3	4	Task 4 test from postman	PENDING	2025-11-05 05:32:36.498817	2025-11-05 05:32:36.498817
4	4	Front test add 5	PENDING	2025-11-05 05:34:37.424057	2025-11-05 05:34:37.424057
5	4	Front test add 6	PENDING	2025-11-05 05:35:17.371511	2025-11-05 05:35:17.371511
6	4	Front test add 7	PENDING	2025-11-05 05:37:49.04359	2025-11-05 05:37:49.04359
8	4	Front add 9 	PENDING	2025-11-05 05:44:49.725114	2025-11-05 05:44:49.725114
1	4	Task 1 Test Service	DONE	2025-11-05 04:51:08.814682	2025-11-05 07:11:49.510943
9	4	Front 10	PENDING	2025-11-05 05:45:20.047993	2025-11-05 08:50:55.288163
7	4	Front Add 8	DONE	2025-11-05 05:42:56.721562	2025-11-05 08:51:28.534407
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id, email, password, username, role, "createdAt") FROM stdin;
1	test5@mail.com	$2b$10$addOkFVqOruMDreSfLNpNepGAtIzBLZQx1B6UEsHDZnhgWpeTEvKm	test5	USER	2025-11-04 05:19:16.117444
2	front1@mail.com	$2b$10$Vky19zT3sTNvr/mEuMbefOnveYHqiNO5cu6OuMJAcmUiMathwenUu	FRONT1	USER	2025-11-04 05:25:42.209651
3	front1@email.com	$2b$10$zFDh8HDcs.av577ajM7gf.SvQ1XzzQqoIpCjaW4pyIAmIc8LX21q.	FRONT1	USER	2025-11-04 05:27:58.303615
4	front3@email.com	$2b$10$x8ADz/PhzLEjRmVDyxuEmORc1EUvkIRVL15ObyqqKdwIGOMfECdIq	FRONT3	USER	2025-11-04 06:21:22.859276
5	front4@email.com	$2b$10$ADwzJQn4nfFRUDumUw.OOOHLtu3M1/2u.Hq.Q4IVT6aSfQ4v2r3Ru	FRONT4	USER	2025-11-04 08:30:50.841147
6	front5@email.com	$2b$10$swMI39xxA2m4iEZbAQQNQuCsXmu1nbpsOWF/ATszCboIADDIi1.3a	FRONT5	USER	2025-11-04 08:32:03.202379
7	front6@email.com	$2b$10$ylMUIHBb.5UKuSb7nShfkenRS45n9AmbStxK7vKW8Msts.5bRpi9.	FRONT6	USER	2025-11-04 08:33:19.359073
8	front7@email.com	$2b$10$C92nec2WDHnteRxRVWOqdOY5Zf3SQVcNNjy69yjAh8ZPyA3XBNqii	FRONT7	USER	2025-11-04 08:34:09.412075
9	test2@email.com	$2b$10$Dbnw5sX5hBRYVFXv84M0u.28e9dYiDcgU9r66L5KeDtCgdhrjilm6	TEST2	USER	2025-11-04 08:35:20.538062
10	test3@email.com	$2b$10$a3eA912cnwIL1DMVEX6z/.B3NmjJg.rJrrMAlQqJgR1h6G3xTLeOi	TEST3	USER	2025-11-04 08:36:25.115383
11	test4@email.com	$2b$10$GXVPalgXkuYcTCHC/82wvO4k5TmyGGl231i2cqLjZssZMATVmpOkO	TEST4	USER	2025-11-04 08:37:27.924568
12	test5@email.com	$2b$10$VVH6pwa6XJ7MBk9Ka6fU1OkWRKW0T/l75uzVxpzEgstlqpco3T47e	TEST5	USER	2025-11-04 08:43:20.68182
13	test6@email.com	$2b$10$Mz4HRq6XjfS2w5Bnj2qzdOhAcEvTO4zIIgvCKC9BKG8D687JMjYSK	TEST6	USER	2025-11-04 08:44:51.683494
14	test7@email.com	$2b$10$EYdFzQjBXVdlvTHV0eCIcOxkljvpj20eskuFejtv46sT2h.9PI1BW	TEST7	USER	2025-11-04 08:45:17.250226
15	test8@email.com	$2b$10$ZazfBE.iT6.V1lL.Gs.PWOLBVotk9RSAhIZdacsYCMfXImPJ4zQsu	TEST8	USER	2025-11-04 08:45:56.974693
16	test9@email.com	$2b$10$e31zSLhFwz/3eSjmu0Jddey9fVNEdUV484tG4D.7348R6dOqM9MQe	TEST9	USER	2025-11-04 08:46:57.498127
17	test10@email.com	$2b$10$omHQhBF9q8rmiSIbdk.z0OnCJpn2EJk5XDQDM.dB/tzErLChOqDSu	TEST10	USER	2025-11-04 08:47:24.107978
18	test11@email.com	$2b$10$FqrRKJMG7k8RXpSS.Q.RQ.5Hys7VpTukpe4ft4EaYJtAQMwNk9a0S	TEST11	USER	2025-11-04 08:47:59.185944
19	admin1@email.com	$2b$10$KIEretJOuYHYVRcsl4oghuuml74Y/UwjXKsVlui4z9pgzf0Ks69Vi	Admin Tata	ADMIN	2025-11-06 05:34:27.271065
\.


--
-- Name: Item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Item_id_seq"', 1, false);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_id_seq"', 1, false);


--
-- Name: item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.item_id_seq', 16, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 19, true);


--
-- Name: Item Item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Item"
    ADD CONSTRAINT "Item_pkey" PRIMARY KEY (id);


--
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- Name: item PK_d3c0c71f23e7adcf952a1d13423; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY (id);


--
-- Name: user UQ_e12875dfb3b1d92d7d7c5377e22; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Item_user_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "Item_user_id_idx" ON public."Item" USING btree (user_id);


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: item FK_2f3f2831c9b37214309d23b07fd; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT "FK_2f3f2831c9b37214309d23b07fd" FOREIGN KEY (user_id) REFERENCES public."user"(id) ON DELETE CASCADE;


--
-- Name: Item Item_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Item"
    ADD CONSTRAINT "Item_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

\unrestrict NyVHOnf6AnP7HJwgGTmL5IiBb9PKYWrx4jnH9D9AS3faFEpRUf3LbIo7ykyLkld

