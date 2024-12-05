@file:OptIn(ExperimentalDistributionDsl::class)

import org.jetbrains.kotlin.gradle.targets.js.dsl.ExperimentalDistributionDsl

plugins {
    kotlin("multiplatform") version "2.1.0"
}

group = "kotlin.test.actions"
version = "0.0.1"
description = ""

repositories {
    mavenLocal()
    mavenCentral()
}

kotlin {
    js {
        nodejs {
            distribution {
                outputDirectory.set(projectDir.resolve("output"))   
            }
        }

        binaries.executable()
    }

    sourceSets {
        val jsMain by getting {
            dependencies {
                implementation(npm("@actions/core", "^1.11.1"))
                implementation(npm("@actions/github", "^6.0.0"))
            }
        }
    }
}