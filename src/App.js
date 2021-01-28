import React from "react";
import { Avatar } from "@ui5/webcomponents-react/lib/Avatar";
import { AvatarGroup } from "@ui5/webcomponents-react/lib/AvatarGroup";
import { Badge } from "@ui5/webcomponents-react/lib/Badge";
import { BusyIndicator } from "@ui5/webcomponents-react/lib/BusyIndicator";
import { Button } from "@ui5/webcomponents-react/lib/Button";
import { Calendar } from "@ui5/webcomponents-react/lib/Calendar";
import { Card } from "@ui5/webcomponents-react/lib/Card";
import { Carousel } from "@ui5/webcomponents-react/lib/Carousel";
import { CheckBox } from "@ui5/webcomponents-react/lib/CheckBox";
import { ComboBox } from "@ui5/webcomponents-react/lib/ComboBox";
import { ComboBoxItem } from "@ui5/webcomponents-react/lib/ComboBoxItem";
import { CustomListItem } from "@ui5/webcomponents-react/lib/CustomListItem";
import { DatePicker } from "@ui5/webcomponents-react/lib/DatePicker";
import { DateRangePicker } from "@ui5/webcomponents-react/lib/DateRangePicker";
import { DateTimePicker } from "@ui5/webcomponents-react/lib/DateTimePicker";
import { Dialog } from "@ui5/webcomponents-react/lib/Dialog";
import { DurationPicker } from "@ui5/webcomponents-react/lib/DurationPicker";
import { FileUploader } from "@ui5/webcomponents-react/lib/FileUploader";
import { GroupHeaderListItem } from "@ui5/webcomponents-react/lib/GroupHeaderListItem";
import { Icon } from "@ui5/webcomponents-react/lib/Icon";
import { Input } from "@ui5/webcomponents-react/lib/Input";
import { Label } from "@ui5/webcomponents-react/lib/Label";
import { Link } from "@ui5/webcomponents-react/lib/Link";
import { List } from "@ui5/webcomponents-react/lib/List";
import { MessageStrip } from "@ui5/webcomponents-react/lib/MessageStrip";
import { MultiComboBox } from "@ui5/webcomponents-react/lib/MultiComboBox";
import { MultiComboBoxItem } from "@ui5/webcomponents-react/lib/MultiComboBoxItem";
import { MultiInput } from "@ui5/webcomponents-react/lib/MultiInput";
import { Option } from "@ui5/webcomponents-react/lib/Option";
import { Panel } from "@ui5/webcomponents-react/lib/Panel";
import { Popover } from "@ui5/webcomponents-react/lib/Popover";
import { ProgressIndicator } from "@ui5/webcomponents-react/lib/ProgressIndicator";
import { RadioButton } from "@ui5/webcomponents-react/lib/RadioButton";
import { RangeSlider } from "@ui5/webcomponents-react/lib/RangeSlider";
import { RatingIndicator } from "@ui5/webcomponents-react/lib/RatingIndicator";
import { ResponsivePopover } from "@ui5/webcomponents-react/lib/ResponsivePopover";
import { SegmentedButton } from "@ui5/webcomponents-react/lib/SegmentedButton";
import { Select } from "@ui5/webcomponents-react/lib/Select";
import { Slider } from "@ui5/webcomponents-react/lib/Slider";
import { StandardListItem } from "@ui5/webcomponents-react/lib/StandardListItem";
import { SuggestionItem } from "@ui5/webcomponents-react/lib/SuggestionItem";
import { Switch } from "@ui5/webcomponents-react/lib/Switch";
import { Tab } from "@ui5/webcomponents-react/lib/Tab";
import { TabContainer } from "@ui5/webcomponents-react/lib/TabContainer";
import { TabSeparator } from "@ui5/webcomponents-react/lib/TabSeparator";
import { Table } from "@ui5/webcomponents-react/lib/Table";
import { TableCell } from "@ui5/webcomponents-react/lib/TableCell";
import { TableColumn } from "@ui5/webcomponents-react/lib/TableColumn";
import { TableRow } from "@ui5/webcomponents-react/lib/TableRow";
import { TextArea } from "@ui5/webcomponents-react/lib/TextArea";
import { TimePicker } from "@ui5/webcomponents-react/lib/TimePicker";
import { Title } from "@ui5/webcomponents-react/lib/Title";
import { Toast } from "@ui5/webcomponents-react/lib/Toast";
import { ToggleButton } from "@ui5/webcomponents-react/lib/ToggleButton";
import { Token } from "@ui5/webcomponents-react/lib/Token";
import { Tree } from "@ui5/webcomponents-react/lib/Tree";
import { TreeItem } from "@ui5/webcomponents-react/lib/TreeItem";
import { Bar } from "@ui5/webcomponents-react/lib/Bar";
import { FlexibleColumnLayout } from "@ui5/webcomponents-react/lib/FlexibleColumnLayout";
import { NotificationAction } from "@ui5/webcomponents-react/lib/NotificationAction";
import { NotificationListGroupItem } from "@ui5/webcomponents-react/lib/NotificationListGroupItem";
import { NotificationListItem } from "@ui5/webcomponents-react/lib/NotificationListItem";
import { ProductSwitch } from "@ui5/webcomponents-react/lib/ProductSwitch";
import { ProductSwitchItem } from "@ui5/webcomponents-react/lib/ProductSwitchItem";
import { ShellBar } from "@ui5/webcomponents-react/lib/ShellBar";
import { ShellBarItem } from "@ui5/webcomponents-react/lib/ShellBarItem";
import { SideNavigation } from "@ui5/webcomponents-react/lib/SideNavigation";
import { SideNavigationItem } from "@ui5/webcomponents-react/lib/SideNavigationItem";
import { SideNavigationSubItem } from "@ui5/webcomponents-react/lib/SideNavigationSubItem";
import { Timeline } from "@ui5/webcomponents-react/lib/Timeline";
import { TimelineItem } from "@ui5/webcomponents-react/lib/TimelineItem";
import { UploadCollection } from "@ui5/webcomponents-react/lib/UploadCollection";
import { UploadCollectionItem } from "@ui5/webcomponents-react/lib/UploadCollectionItem";
import { Wizard } from "@ui5/webcomponents-react/lib/Wizard";
import { WizardStep } from "@ui5/webcomponents-react/lib/WizardStep";
import { FCLLayout } from "@ui5/webcomponents-react/lib/FCLLayout";

import "@ui5/webcomponents-icons/dist/add";
import "./App.css";

function App() {
  return (
    <div className="flexBox">
      <ShellBar primaryTitle="UI5 Web Components for React Template">
        <ShellBarItem text="123" icon="add" />
      </ShellBar>

      <Avatar initials="A" />
      <AvatarGroup>
        <Avatar initials="A" />
        <Avatar initials="B" />
        <Avatar initials="C" />
      </AvatarGroup>

      <Badge>Badge</Badge>

      <BusyIndicator active />

      <Button>Button</Button>

      <Calendar />

      <Card>My Card Content</Card>

      <Carousel>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Carousel>

      <CheckBox />

      <ComboBox>
        <ComboBoxItem>123</ComboBoxItem>
      </ComboBox>

      <DatePicker />

      <DateRangePicker />

      <DateTimePicker />

      <Dialog>
        <div>My Dialog Content</div>
      </Dialog>

      <DurationPicker />

      <FileUploader />

      <Icon name="add" />

      <Input placeholder="Input">
        <SuggestionItem>123</SuggestionItem>
      </Input>

      <Label>Label</Label>

      <Link>Link</Link>

      <List>
        <GroupHeaderListItem>Group Header</GroupHeaderListItem>
        <StandardListItem>Standard</StandardListItem>
        <CustomListItem>Custom</CustomListItem>
      </List>

      <MessageStrip>Message Strip</MessageStrip>

      <MultiComboBox>
        <MultiComboBoxItem>MultiComboBoxItem</MultiComboBoxItem>
      </MultiComboBox>

      <MultiInput
        tokens={
          <>
            <Token text="Token" />
          </>
        }
      />

      <Panel headerText="Panel">My Panel Content</Panel>

      <Popover>Popover</Popover>

      <ProgressIndicator value={50} />

      <RadioButton text="Radio Button" />

      <RangeSlider />

      <RatingIndicator />

      <ResponsivePopover>Responsive Popover</ResponsivePopover>

      <SegmentedButton>
        <ToggleButton pressed>1</ToggleButton>
        <ToggleButton>2</ToggleButton>
        <ToggleButton>3</ToggleButton>
      </SegmentedButton>

      <Select>
        <Option>1</Option>
      </Select>

      <Slider />

      <Switch />

      <TabContainer>
        <Tab text="123"></Tab>
        <TabSeparator />
        <Tab text="567"></Tab>
      </TabContainer>

      <Table
        columns={
          <>
            <TableColumn>C1</TableColumn>
            <TableColumn>C2</TableColumn>
          </>
        }
      >
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>2</TableCell>
        </TableRow>
      </Table>

      <TextArea />

      <Title>Title</Title>

      <TimePicker />

      <Toast>My Toast</Toast>

      <Tree>
        <TreeItem text="Tree 1">
          <TreeItem text="Tree 1.1" />
        </TreeItem>
      </Tree>

      <Bar
        startContent={<span>Left</span>}
        middleContent={<span>Middle</span>}
        endContent={<span>End Content</span>}
      />

      <FlexibleColumnLayout
        layout={FCLLayout.ThreeColumnsMidExpandedEndHidden}
        startColumn={<span>Left</span>}
        midColumn={<span>Middle</span>}
        endColumn={<span>End Content</span>}
      />

      <List>
        <NotificationListGroupItem heading="Orders">
          <NotificationListItem
            heading="New Order"
            actions={<NotificationAction text="OK" />}
          >
            NotificationListItem
          </NotificationListItem>
        </NotificationListGroupItem>
      </List>

      <ProductSwitch>
        <ProductSwitchItem icon="add" heading="ProductSwitchItem" />
      </ProductSwitch>

      <SideNavigation>
        <SideNavigationItem text="SideNavigationItem">
          <SideNavigationSubItem text="SideNavigationSubItem" />
        </SideNavigationItem>
      </SideNavigation>

      <Timeline>
        <TimelineItem titleText="TimelineItem" />
        <TimelineItem titleText="TimelineItem 2" />
      </Timeline>

      <UploadCollection>
        <UploadCollectionItem fileName="Laptop" uploadState="Complete">
          Uploaded By: David Keane · Uploaded On: 2014-07-26 · File Size: 35 KB
        </UploadCollectionItem>
      </UploadCollection>

      <Wizard>
        <WizardStep selected heading="Wizard Step 1">
          Wizard!
        </WizardStep>
        <WizardStep disabled heading="Wizard Step 2">
          Wizard 2!
        </WizardStep>
      </Wizard>
    </div>
  );
}

export default App;
