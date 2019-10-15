import {
    BitmapText as PixiBitmapText,
    Container as PixiContainer,
    NineSlicePlane as PixiNineSlicePlane,
    ParticleContainer as PixiParticleContainer,
    SimpleMesh as PixiSimpleMesh,
    SimpleRope as PixiSimpleRope,
    Sprite as PixiSprite,
    Text as PixiText,
    TilingSprite as PixiTilingSprite
} from '@inlet/react-pixi';
import { withView } from './view';

export const BitmapText = withView(PixiBitmapText);
export const Container = withView(PixiContainer);
export const NineSlicePlane = withView(PixiNineSlicePlane);
export const ParticleContainer = withView(PixiParticleContainer);
export const SimpleMesh = withView(PixiSimpleMesh);
export const SimpleRope = withView(PixiSimpleRope);
export const Sprite = withView(PixiSprite);
export const Text = withView(PixiText);
export const TilingSprite = withView(PixiTilingSprite);
