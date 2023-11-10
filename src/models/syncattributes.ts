/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { DestinationAttributes } from "./destinationattributes";
import { MappingAttributes } from "./mappingattributes";
import { SourceAttributes } from "./sourceattributes";
import { Expose, Type } from "class-transformer";

/**
 * If `field_behavior` is set to `"sync_all_properties"`, specify how automatic mappings should be named.
 */
export enum SyncAttributesFieldNormalization {
    StartCase = "start_case",
    LowerCase = "lower_case",
    UpperCase = "upper_case",
    CamelCase = "camel_case",
    SnakeCase = "snake_case",
    MatchSourceNames = "match_source_names",
}

/**
 * The high water mark diffing strategy will allow append syncs to use a timestamp column when identifying new records instead of the default Census diff engine (using primary keys).
 */
export class SyncAttributesHighWaterMarkAttributes extends SpeakeasyBase {
    /**
     * The name of the column that should be used for identifying new records.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "column_name" })
    columnName: string;

    /**
     * If true, the high water mark diff strategy will be used.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "use_high_water_mark_diff_type" })
    useHighWaterMarkDiffType: boolean;
}

/**
 * How records are synced to the destination.
 */
export enum SyncAttributesOperation {
    Append = "append",
    Insert = "insert",
    Mirror = "mirror",
    Update = "update",
    Upsert = "upsert",
}

/**
 * What day of the week this sync should run if `schedule_frequency` is set to `"weekly"`.
 */
export enum SyncAttributesScheduleDay {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
}

/**
 * When this sync should be run.
 */
export enum SyncAttributesScheduleFrequency {
    Never = "never",
    Continuous = "continuous",
    QuarterHourly = "quarter_hourly",
    Hourly = "hourly",
    Daily = "daily",
    Weekly = "weekly",
    Expression = "expression",
}

/**
 * Contains the dbt Cloud job details that should trigger the sync upon success. dbt Cloud project and job IDs can be found in the URL when navigating to a job in the dbt Cloud application or via API.
 */
export class SyncAttributesDbtCloud extends SpeakeasyBase {
    /**
     * The dbt Cloud job id.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "job_id" })
    jobId?: string;

    /**
     * The dbt Cloud project id.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "project_id" })
    projectId?: string;
}

/**
 * The Fivetran job details that should trigger the sync upon success. Fivetran job name can be found in the table of Connectors or Transformations via the Fivetran application and the job id can be found in the URL when navigated to the specific connector/transform details page. These information can also be retrieved via API.
 */
export class SyncAttributesFivetran extends SpeakeasyBase {
    /**
     * The Fivetran job id.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "job_id" })
    jobId?: string;

    /**
     * The Fivetran job name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "job_name" })
    jobName?: string;
}

/**
 * The sync details that should trigger the sync upon success. The sync id can be found via the API or in the URL within the Census management UI.
 */
export class SyncAttributesSyncSequence extends SpeakeasyBase {
    /**
     * The dependent sync id.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sync_id" })
    syncId?: number;
}

/**
 * Specify triggers for the sync. More than one type trigger can be configured.
 */
export class SyncAttributesTriggers extends SpeakeasyBase {
    /**
     * Contains the dbt Cloud job details that should trigger the sync upon success. dbt Cloud project and job IDs can be found in the URL when navigating to a job in the dbt Cloud application or via API.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dbt_cloud" })
    @Type(() => SyncAttributesDbtCloud)
    dbtCloud?: SyncAttributesDbtCloud;

    /**
     * The Fivetran job details that should trigger the sync upon success. Fivetran job name can be found in the table of Connectors or Transformations via the Fivetran application and the job id can be found in the URL when navigated to the specific connector/transform details page. These information can also be retrieved via API.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fivetran" })
    @Type(() => SyncAttributesFivetran)
    fivetran?: SyncAttributesFivetran;

    /**
     * The sync details that should trigger the sync upon success. The sync id can be found via the API or in the URL within the Census management UI.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sync_sequence" })
    @Type(() => SyncAttributesSyncSequence)
    syncSequence?: SyncAttributesSyncSequence;
}

export class SyncAttributes extends SpeakeasyBase {
    /**
     * Specify what cron schedule this sync should run on if the `schedule_frequency` is set to `"experessions"`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "cron_expression" })
    cronExpression?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "destination_attributes" })
    @Type(() => DestinationAttributes)
    destinationAttributes: DestinationAttributes;

    /**
     * When true, will email all workspace users with email notifications enabled and all workspace additional emails when the sync has more than failed_record_notifications_threshold_percent rejected or invalid records in the source or destination.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "failed_record_notifications_enabled" })
    failedRecordNotificationsEnabled?: boolean;

    /**
     * The percentage of rejected and invalid records for which failed record emails will be triggered.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "failed_record_notifications_threshold_percent" })
    failedRecordNotificationsThresholdPercent?: number;

    /**
     * When true, will email all workspace users with email notifications enabled and all workspace additional emails when the sync fails and recovers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "failed_run_notifications_enabled" })
    failedRunNotificationsEnabled?: boolean;

    /**
     * Specify `"sync_all_properties"` to automatically update mappings.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "field_behavior" })
    fieldBehavior?: string;

    /**
     * If `field_behavior` is set to `"sync_all_properties"`, specify how automatic mappings should be named.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "field_normalization" })
    fieldNormalization?: SyncAttributesFieldNormalization;

    /**
     * The high water mark diffing strategy will allow append syncs to use a timestamp column when identifying new records instead of the default Census diff engine (using primary keys).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "high_water_mark_attributes" })
    @Type(() => SyncAttributesHighWaterMarkAttributes)
    highWaterMarkAttributes?: SyncAttributesHighWaterMarkAttributes;

    /**
     * A label to give to this sync.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "label" })
    label?: string;

    @SpeakeasyMetadata({ elemType: MappingAttributes })
    @Expose({ name: "mappings" })
    @Type(() => MappingAttributes)
    mappings: MappingAttributes[];

    /**
     * How records are synced to the destination.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "operation" })
    operation: SyncAttributesOperation;

    /**
     * Whether or not this sync should be paused.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "paused" })
    paused?: boolean;

    /**
     * What day of the week this sync should run if `schedule_frequency` is set to `"weekly"`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "schedule_day" })
    scheduleDay?: SyncAttributesScheduleDay;

    /**
     * When this sync should be run.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "schedule_frequency" })
    scheduleFrequency?: SyncAttributesScheduleFrequency;

    /**
     * What hour of the day this sync should run if `schedule_frequency` is set to `"weekly"` or `"daily"`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "schedule_hour" })
    scheduleHour?: number;

    /**
     * What minute of the hour this sync should run if `scheule_frequency` is set to `"weekly"`, `"daily"` or `"hourly"`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "schedule_minute" })
    scheduleMinute?: number;

    /**
     * Attributes used to identify the data source for this sync.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source_attributes" })
    @Type(() => SourceAttributes)
    sourceAttributes: SourceAttributes;

    /**
     * Specify triggers for the sync. More than one type trigger can be configured.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "triggers" })
    @Type(() => SyncAttributesTriggers)
    triggers?: SyncAttributesTriggers;

    /**
     * When true, checks if the given payload is valid to configure a sync. Does not create the sync.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "validate_only" })
    validateOnly?: boolean;
}
