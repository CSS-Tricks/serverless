import React, { useState, useEffect } from "react";
import { StaticQuery, graphql } from "gatsby";
import { uniq, flatten } from "lodash";

import styles from "./resources.module.scss";

import SEO from "../components/seo";
import PageHeader from "../components/pageHeader/pageHeader";
import Card from "../components/card/card";
import Footer from "../components/footer/footer";

export default () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [tagsOpen, setTagOpenState] = useState(false);
  const onTagClick = tag => {
    setCurrentFilter(tag);
    document.documentElement.scrollTo({
      top: document.querySelector("#grid").getBoundingClientRect().top - 70,
      left: 0,
      behavior: "smooth"
    });
  };
  useEffect(() => {
    document.body.classList.remove("homepage");
    document.body.classList.remove("menu-open");
  });
  return (
    <StaticQuery
      query={graphql`
        query ResourcesQuery {
          allFile(filter: { absolutePath: { regex: "//resources//" } }) {
            edges {
              node {
                childMarkdownRemark {
                  frontmatter {
                    title
                    url
                    author
                    tags
                  }
                  html
                }
              }
            }
          }
        }
      `}
      render={data => {
        let allTags = [];

        data.allFile.edges.forEach(({ node }) => {
          const tag = node.childMarkdownRemark.frontmatter.tags;
          if (tag) allTags.push(tag);
        });

        allTags = flatten(allTags);
        allTags = uniq(allTags);
        allTags.sort();

        return (
          <>
            <SEO title="Resources" />

            <div data-filter={`filter-${currentFilter}`}>
              <PageHeader title="Resources" className={styles.pageHeader}>
                <p>
                  Articles about things related to Serverless, JAMstack, and the
                  whole ball of yarn.
                </p>

                <nav className={styles.nav} data-open={tagsOpen}>
                  Topics:{" "}
                  {allTags.map((tag, i) => {
                    return (
                      <button
                        key={tag}
                        onClick={() => onTagClick(tag)}
                        className={styles.tag}
                      >
                        {tag}
                      </button>
                    );
                  })}
                  <button
                    className={styles.more}
                    data-open={tagsOpen}
                    onClick={() => setTagOpenState(tagsOpen ? false : true)}
                  >
                    More
                  </button>
                </nav>
              </PageHeader>

              <main className="grid" id="grid">
                {data.allFile.edges.map(({ node }, i) => {
                  const {
                    title,
                    url,
                    author,
                    tags
                  } = node.childMarkdownRemark.frontmatter;
                  if (tags.includes(currentFilter) || currentFilter === "all") {
                    return (
                      <Card
                        key={title}
                        title={title}
                        author={author}
                        tags={tags}
                        html={node.childMarkdownRemark.html}
                        url={url}
                        extraClasses="resource"
                        tagChanger={onTagClick}
                      />
                    );
                  } else {
                    return "";
                  }
                })}
              </main>

              <Footer />
            </div>
          </>
        );
      }}
    />
  );
};
