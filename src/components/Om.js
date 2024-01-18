import React from "react";
import {
  PageContainer,
  ContentContainer,
  Column,
  Image,
  TextSection,
  Paragraph,
  Headline,
  SectionHeader
} from "./OmStyled";

const DEN_KORTE = "DEN KORTE"
const DEN_LANGE = "DEN LANGE"

const Om = () => {
  return (
    <PageContainer>
      <SectionHeader>OM</SectionHeader>
      <ContentContainer>
        <Column>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            alt="Something creative"
          />
        </Column>
        <Column>
          <TextSection>
            <Headline>{DEN_KORTE}</Headline>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis bibendum metus, quis blandit ante.
            </Paragraph>
          </TextSection>
          <Image
            src="https://gweb-research-imagen.web.app/compositional/An%20oil%20painting%20of%20a%20British%20Shorthair%20cat%20wearing%20a%20cowboy%20hat%20and%20red%20shirt%20skateboarding%20on%20a%20beach./1_.jpeg"
            alt="Something fun"
          />
        </Column>
        <Column>
          <TextSection>
            <Headline>{DEN_LANGE}</Headline>
            <Paragraph>
              Donec nulla arcu, aliquam et lorem eget, volutpat consectetur elit. Donec non sapien nisi. Nullam luctus, dui in hendrerit placerat, libero arcu mollis nibh, in tempor arcu diam in leo. Aenean ac bibendum eros. Etiam lacinia, odio quis malesuada blandit, augue arcu gravida tellus, et commodo lacus nibh non velit. Aenean bibendum odio sapien, a aliquam sapien eleifend ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam pulvinar massa in dictum vestibulum. Vivamus nec gravida neque. Aliquam egestas nibh vitae dignissim fringilla. Ut sagittis nunc sit amet augue dapibus consectetur.
              Nulla quis bibendum metus, quis blandit ante. Phasellus iaculis tristique odio, rhoncus tempor urna bibendum sit amet. Duis rutrum, nisi eget facilisis laoreet.
            </Paragraph>
          </TextSection>
        </Column>
      </ContentContainer>
    </PageContainer>
  );
};

export default Om;
