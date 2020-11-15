/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
              />
            )}
          </a>
          <div>
            <h5>Modules</h5>
			<a href={this.docUrl('module-procyon')}>
              Procyon
            </a>
            <a href={this.docUrl('module-procyon-core')}>
              Procyon Core
            </a>
			<a href={this.docUrl('module-procyon-context')}>
              Procyon Context
            </a>
			<a href={this.docUrl('module-procyon-peas')}>
              Procyon Peas
            </a>
			<a href={this.docUrl('module-procyon-configure')}>
              Procyon Configure
            </a>
			<a href={this.docUrl('module-procyon-tx')}>
              Procyon Transaction
            </a>
            <a href={this.docUrl('module-procyon-web')}>
				Procyon Web
			</a>
            <a href={this.docUrl('module-procyon-orm')}>
              Procyon ORM
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href="https://discordapp.com/">Discord</a>
          </div>
          <div>
            <h5>More</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
            <a href="https://github.com/procyon-projects/">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>
        <section className="copyright">
		{this.props.config.copyright}
		</section>
      </footer>
    );
  }
}

module.exports = Footer;
