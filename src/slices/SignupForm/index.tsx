import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/container";

/**
 * Props for `SignupForm`.
 */
export type SignupFormProps = SliceComponentProps<Content.SignupFormSlice>;

/**
 * Component for "SignupForm" Slices.
 */
const SignupForm: FC<SignupFormProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-green-50 py-8"
    >
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold pb-3">{slice.primary.title}</h2>
          {/* Embed form has been hardcoded here */}
          <div dangerouslySetInnerHTML={{
            __html: `<div id="mc_embed_shell">
                <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
                <style type="text/css">
                  #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 100%; max-width: 600px; border-radius: 8px; border: 2px solid oklch(0.704 0.14 182.503); box-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);}
                  #mc_embed_signup .mc-field-group label {margin-top: 8px; margin-bottom: 8px}
                  #mc_embed_signup .mc-gdpr__title {font-weight: bold}
                  /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
                    We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
                </style><style type="text/css">
                  #mc-embedded-subscribe-form input[type=checkbox]{display: inline; width: auto;margin-right: 10px;}
                  #mergeRow-gdpr {margin-top: 20px;}
                  #mergeRow-gdpr fieldset label {font-weight: normal;}
                  #mc-embedded-subscribe-form .mc_fieldset{border:none;min-height: 0px;padding-bottom:0px;}
                </style>
                <div id="mc_embed_signup">
                    <form action="https://readingloopai.us15.list-manage.com/subscribe/post?u=393bc24d57cb89d51a2b042bc&amp;id=13ede153ca&amp;v_id=1&amp;f_id=00fec2e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                        <div id="mc_embed_signup_scroll">
                            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                            <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div><div class="mc-field-group"><label for="mce-FNAME">First Name </label><input type="text" name="FNAME" class=" text" id="mce-FNAME" value=""></div><div class="mc-field-group"><label for="mce-LNAME">Last Name </label><input type="text" name="LNAME" class=" text" id="mce-LNAME" value=""></div><div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"><div class="content__gdpr"><label class="mc-gdpr__title">Marketing permissions</label><p>We will only use the information you provide to send occasional updates about our product.</p><fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field"><label class="checkbox subfield" for="gdpr7"><input type="checkbox" id="gdpr_7" name="gdpr[7]" class="gdpr" value="Y"><span>I agree to receive emails about product updates and marketing from Reading Loop ai.</span></label></fieldset><p>You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our website.</p></div><div class="content__gdprLegal"><p>We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/terms">Learn more</a> about Mailchimp's privacy practices.</p></div></div>
                        <div id="mce-responses" class="clear foot">
                            <div class="response" id="mce-error-response" style="display: none;"></div>
                            <div class="response" id="mce-success-response" style="display: none;"></div>
                        </div>
                    <div aria-hidden="true" style="position: absolute; left: -5000px;">
                        /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
                        <input type="text" name="b_393bc24d57cb89d51a2b042bc_13ede153ca" tabindex="-1" value="">
                    </div>
                        <div class="optionalParent">
                            <div class="clear foot">
                                <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
                                <p style="margin: 0px auto;"><a href="http://eepurl.com/jfI6sU" title="Mailchimp - email marketing made easy and fun"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"><img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
                            </div>
                        </div>
                    </div>
                </form>
                </div>
                <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>
            `
          }} />

        </div>
      </Container>
    </section>
  );
};

export default SignupForm;
